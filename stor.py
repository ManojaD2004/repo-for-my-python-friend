import subprocess
import os

nameUrl = os.popen("node ./getimage.js").read().strip()
print(nameUrl)

