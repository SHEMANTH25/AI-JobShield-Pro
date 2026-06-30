import pdfplumber

def extract_pdf_text(file):

    text = ""

    with pdfplumber.open(file) as pdf:

        for page in pdf.pages:

            txt = page.extract_text()

            if txt:
                text += txt + "\n"

    return text