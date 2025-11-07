import threading
import time

def walk_dog(first, last):
  time.sleep(8)
  print(f"Walking: {first} {last}")

def take_out_trash():
  time.sleep(2)
  print("Taking out the trash")

def get_mail():
  time.sleep(4)
  print("Getting the mail.")

chore_1 = threading.Thread(target = walk_dog, args = ("King", "Garcia"))

chore_1.start()

chore_2 = threading.Thread(target = take_out_trash)

chore_2.start()

chore_3 = threading.Thread(target = get_mail)

chore_3.start()

chore_1.join()
chore_2.join()
chore_3.join()

print("all chores done.")
