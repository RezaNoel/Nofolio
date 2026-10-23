"""Write a small, valid PDF resume into public/resume.pdf."""

from pathlib import Path


def pdf_escape(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def make_pdf(lines: list[tuple[int, int, str, int]]) -> bytes:
    stream_parts = ["BT", "/F1 11 Tf"]
    for x, y, text, size in lines:
        stream_parts.append(f"/F1 {size} Tf")
        stream_parts.append(f"1 0 0 1 {x} {y} Tm ({pdf_escape(text)}) Tj")
    stream_parts.append("ET")
    stream = "\n".join(stream_parts).encode("latin-1", "replace")

    objects = []
    objects.append(b"1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj\n")
    objects.append(b"2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj\n")
    objects.append(
        b"3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
        b"/Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>endobj\n"
    )
    objects.append(
        f"4 0 obj<< /Length {len(stream)} >>stream\n".encode("ascii")
        + stream
        + b"\nendstream\nendobj\n"
    )
    objects.append(b"5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj\n")

    output = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for obj in objects:
        offsets.append(len(output))
        output.extend(obj)

    xref_pos = len(output)
    output.extend(f"xref\n0 {len(objects) + 1}\n".encode("ascii"))
    output.extend(b"0000000000 65535 f \n")
    for offset in offsets[1:]:
        output.extend(f"{offset:010d} 00000 n \n".encode("ascii"))
    output.extend(
        f"trailer<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode(
            "ascii"
        )
    )
    return bytes(output)


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    dest = root / "public" / "resume.pdf"

    rows: list[tuple[int, int, str, int]] = [
        (64, 730, "REZA TAVANGAR", 22),
        (64, 706, "Full-Stack Software Developer", 13),
        (64, 684, "Yerevan, Armenia  |  github.com/RezaNoel  |  linkedin.com/in/rezanoel", 10),
        (64, 650, "PROFILE", 12),
        (64, 632, "Computer Network and Software background. Builds full-stack products and", 11),
        (64, 616, "automation workflows (n8n, Docker) plus local AI agent integrations.", 11),
        (64, 582, "STACK", 12),
        (64, 564, "Python, Django, React, TypeScript, C#, PHP, Lua, n8n, Docker, Obsidian", 11),
        (64, 530, "SELECTED WORK", 12),
        (64, 510, "Nolingo", 12),
        (64, 494, "Obsidian flashcard plugin with spaced repetition for language learning.", 11),
        (64, 470, "FiveM Server Scripts", 12),
        (64, 454, "Custom Lua + NUI: ox_inventory, vehicle garages, gang management.", 11),
        (64, 430, "Digital Garden & Workflows", 12),
        (64, 414, "n8n, Telegram bots, and Python scrapers. Garden: rezanoel.ir", 11),
        (64, 390, "Content Creation", 12),
        (64, 374, "YouTube: Chi Boodeh and RezaNoel — productivity and gaming.", 11),
        (64, 340, "FOCUS", 12),
        (64, 322, "Automation workflows, containerized services, and local-first AI agents.", 11),
        (64, 80, "Replace this file with your designed PDF. Keep the name public/resume.pdf.", 9),
    ]

    dest.write_bytes(make_pdf(rows))
    print(f"Wrote {dest}")


if __name__ == "__main__":
    main()
