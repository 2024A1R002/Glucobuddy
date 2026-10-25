import open_clip
import torch
from PIL import Image

print("Loading AI model...")

model, _, preprocess = open_clip.create_model_and_transforms(
    "ViT-B-32",
    pretrained="laion2b_s34b_b79k"
)

tokenizer = open_clip.get_tokenizer("ViT-B-32")

print("Model loaded!")

image = preprocess(
    Image.open("food_test.jpg")
).unsqueeze(0)

labels = [
    "rice",
    "roti",
    "naan",
    "dal",
    "rajma",
    "chole",
    "paratha",
    "biryani",
    "chicken curry",
    "vegetable curry"
]

text = tokenizer(labels)

with torch.no_grad():
    image_features = model.encode_image(image)
    text_features = model.encode_text(text)

    image_features /= image_features.norm(dim=-1, keepdim=True)
    text_features /= text_features.norm(dim=-1, keepdim=True)

    similarity = (100.0 * image_features @ text_features.T).softmax(dim=-1)

results = similarity[0]

print("\nIndian food predictions:")

for index in results.argsort(descending=True):
    print(
        labels[index],
        "->",
        round(results[index].item() * 100, 2),
        "%"
    )