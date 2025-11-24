// backend/controllers/exportController.js
const PDFDocument = require("pdfkit");
const { Document, Packer, Paragraph, TextRun } = require("docx");
const { getAllFeedbacks } = require("../utils/awsDynamo");

/**
 * Helper: make PDF Buffer from feedback array
 */
function createPdfBuffer(feedbacks) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 40, size: "A4" });
      const chunks = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.fontSize(20).text("Barist.Ai — Feedback Export", { align: "center" });
      doc.moveDown();

      feedbacks.forEach((f, i) => {
        doc.fontSize(12).fillColor("#333");
        doc.text(`Feedback #${i + 1}`, { underline: true });
        doc.moveDown(0.2);

        doc.fontSize(10);
        doc.text(`Stars: ${f.stars ?? "—"}`);
        doc.text(`Year of birth: ${f.yearOfBirth ?? "—"}`);
        doc.text(`Sex: ${f.sex ?? "—"}`);
        doc.text(`Country: ${f.country ?? "—"}`);
        if (f.state) doc.text(`State: ${f.state}`);
        doc.text(`Comments: ${f.comments ?? "—"}`);
        doc.text(`Created at: ${f.createdAt ?? "—"}`);
        doc.moveDown(1);
        doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeOpacity(0.06).stroke();
        doc.moveDown(1);
      });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Helper: make DOCX Buffer from feedback array (docx Packer)
 */
async function createDocxBuffer(feedbacks) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [new TextRun({ text: "Barist.Ai — Feedback Export", bold: true, size: 36 })],
            alignment: "center",
          }),
          ...feedbacks.flatMap((f, i) => {
            const lines = [
              new Paragraph({ children: [new TextRun({ text: `Feedback #${i + 1}`, bold: true })] }),
              new Paragraph({ children: [new TextRun(`Stars: ${f.stars ?? "—"}`)] }),
              new Paragraph({ children: [new TextRun(`Year of birth: ${f.yearOfBirth ?? "—"}`)] }),
              new Paragraph({ children: [new TextRun(`Sex: ${f.sex ?? "—"}`)] }),
              new Paragraph({ children: [new TextRun(`Country: ${f.country ?? "—"}`)] }),
              ...(f.state ? [new Paragraph({ children: [new TextRun(`State: ${f.state}`)] })] : []),
              new Paragraph({ children: [new TextRun(`Comments: ${f.comments ?? "—"}`)] }),
              new Paragraph({ children: [new TextRun(`Created at: ${f.createdAt ?? "—"}`)] }),
              new Paragraph({ children: [new TextRun("")] }),
            ];
            return lines;
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  return buffer;
}

/**
 * Controller: POST /admin/export
 * Body: { format: 'pdf'|'docx', feedbackIds?: [id,...] }
 * Requires adminAuth (attaching route below enforces that)
 */
async function exportFeedbacks(req, res) {
  try {
    const { format = "pdf", feedbackIds } = req.body || {};

    // Get all feedbacks (from your utils). If feedbackIds provided, filter them
    const all = await getAllFeedbacks(5000); // returns array of feedback objects

    let selected = all;
    if (Array.isArray(feedbackIds) && feedbackIds.length > 0) {
      const set = new Set(feedbackIds);
      selected = all.filter((f) => set.has(f.feedbackId) || set.has(f.id) || set.has(f.feedback_id) || set.has(f._id));
    }

    // fallback: if nothing, return 400
    if (!selected || selected.length === 0) {
      return res.status(400).json({ ok: false, error: "No feedbacks found for export" });
    }

    if (format === "docx") {
      const buffer = await createDocxBuffer(selected);
      res.setHeader("Content-Disposition", `attachment; filename=barist-feedbacks.docx`);
      res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
      return res.send(buffer);
    }

    // default to pdf
    const pdfBuffer = await createPdfBuffer(selected);
    res.setHeader("Content-Disposition", `attachment; filename=barist-feedbacks.pdf`);
    res.setHeader("Content-Type", "application/pdf");
    return res.send(pdfBuffer);
  } catch (err) {
    console.error("Export error:", err);
    return res.status(500).json({ ok: false, error: "Export generation failed" });
  }
}

module.exports = {
  exportFeedbacks,
};
