# # # from flask import Flask, request, jsonify
# # # import fitz  # PyMuPDF
# # # from sentence_transformers import SentenceTransformer, util
# # # import os

# # # app = Flask(__name__)
# # # model = SentenceTransformer('all-MiniLM-L6-v2')

# # # def extract_text(path):
# # #     text = ""
# # #     with fitz.open(path) as doc:
# # #         for page in doc:
# # #             text += page.get_text()
# # #     return text

# # # @app.route('/process', methods=['POST'])
# # # def process():
# # #     pdf = request.files['pdf']
# # #     question = request.form['question']
# # #     save_path = f"temp/{pdf.filename}"
# # #     os.makedirs("temp", exist_ok=True)
# # #     pdf.save(save_path)

# # #     context = extract_text(save_path)
# # #     chunks = [context[i:i+512] for i in range(0, len(context), 512)]

# # #     question_embedding = model.encode(question, convert_to_tensor=True)
# # #     chunk_embeddings = model.encode(chunks, convert_to_tensor=True)

# # #     scores = util.cos_sim(question_embedding, chunk_embeddings)[0]
# # #     top_chunk = chunks[scores.argmax().item()]

# # #     return jsonify({"answer": top_chunk})

# # # if __name__ == '__main__':
# # #     app.run(port=5001)

# # from flask import Flask, request, jsonify
# # import fitz  # PyMuPDF
# # import os

# # app = Flask(__name__)

# # def extract_text(path):
# #     text = ""
# #     with fitz.open(path) as doc:
# #         for page in doc:
# #             text += page.get_text()
# #     return text

# # @app.route('/process', methods=['POST'])
# # def process():
# #     pdf = request.files['pdf']
# #     question = request.form['question']
# #     os.makedirs("temp", exist_ok=True)
# #     path = os.path.join("temp", pdf.filename)
# #     pdf.save(path)
# #     context = extract_text(path)
# #     return jsonify({
# #         "question": question,
# #         "context": context[:4000]  # limit to 4k characters for TinyLlama
# #     })


# # if __name__ == '__main__':
# #     app.run(port=5001)

# from flask import Flask, request, jsonify
# import fitz  # PyMuPDF
# import os

# app = Flask(__name__)

# def extract_text(path):
#     text = ""
#     with fitz.open(path) as doc:
#         for page in doc:
#             text += page.get_text()
#     return text

# @app.route('/process', methods=['POST'])
# def process():
#     pdf = request.files['pdf']
#     question = request.form['question']
#     os.makedirs("temp", exist_ok=True)
#     path = os.path.join("temp", pdf.filename)
#     pdf.save(path)

#     context = extract_text(path)
#     return jsonify({
#         "question": question,
#         "context": context[:4000]  # limit to 4k characters for TinyLlama
#     })



# if __name__ == '__main__':
#     app.run(port=5001)

from flask import Flask, request, jsonify
import fitz  # PyMuPDF
import os

app = Flask(__name__)
UPLOAD_FOLDER = 'temp'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/process', methods=['POST'])
def process_pdf():
    pdf = request.files['pdf']
    question = request.form['question']

    # Save PDF temporarily
    path = os.path.join(UPLOAD_FOLDER, pdf.filename)
    pdf.save(path)

    # Extract text
    text = ""
    with fitz.open(path) as doc:
        for page in doc:
            text += page.get_text()

    # Limit text to 4000 characters for TinyLlama
    limited_text = text[:4000]

    return jsonify({
        "context": limited_text,
        "question": question
    })

if __name__ == '__main__':
    app.run(port=5001)
