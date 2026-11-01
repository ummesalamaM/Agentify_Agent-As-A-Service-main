import os, time
from dotenv import load_dotenv
load_dotenv()
import google.generativeai as genai
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

candidates = [
    "gemini-3.5-flash-lite",
    "gemini-3.1-flash-lite",
    "gemini-3-flash-preview",
    "gemini-3.5-flash",
    "gemini-3.6-flash",
    "gemini-3.7-flash",
    "gemini-flash-lite-latest",
    "gemini-flash-latest",
]

for name in candidates:
    start = time.time()
    try:
        model = genai.GenerativeModel(name)
        model.generate_content("Say hi in 3 words")
        print(f"WORKS   {name}  ({time.time() - start:.1f}s)")
    except Exception as e:
        print(f"FAILED  {name}: {str(e)[:90]}")