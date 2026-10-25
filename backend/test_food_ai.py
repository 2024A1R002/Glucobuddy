from transformers import pipeline
from PIL import Image

print("Loading food recognition model...")

classifier = pipeline(
    "image-classification",
    model="nateraw/food"
)

print("Model loaded!")
print("Reading food image...")

image = Image.open("food_test.jpg")

results = classifier(image)

print("\nFood predictions:")

for result in results[:5]:
    print(
        result["label"],
        "->",
        round(result["score"] * 100, 2),
        "%"
    )