import sys
import spacy

def extract_names(text):
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(text)
    
    first_name = ""
    last_name = ""
    
    for ent in doc.ents:
        if ent.label_ == "PERSON":
            names = ent.text.split()
            if len(names) >= 2:
                first_name = names[0]
                last_name = names[-1]
                break

    return first_name, last_name

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python extract_names.py 'Resume text here'")
        sys.exit(1)

    resume_text = sys.argv[1]
    first_name, last_name = extract_names(resume_text)
    print(first_name)
    print(last_name)


