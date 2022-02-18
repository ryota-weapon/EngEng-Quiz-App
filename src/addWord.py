
wordsToAdd = [
    "say",
    "tell",
    "talk",
    "sell",
    "stay",
    "go"
    #come,
    #get,
    #have,
    #use,
    #spend,
    #wait,
    #look,
    #see,
    #watch,
]

meanings = [
    "express in words",
    "let something be known",
    "an exchange of ideas via conversation",
    "exchange or deliver for money or its equivalent",
    "continuing or remaining in a place or state",
    "change location; move, travel, or proceed, also metaphorically",
]

# category_id = ""
# for i in range(len(wordsToAdd)):
#     data = {
#         u"answer": wordsToAdd[i],
#         u"question": meanings[i],
#         u"category_id": u"M6PpAYJMQgox5T4tD8ta",  
#     }
    # db.collection(u"problems").document




data = {
    u"name": u"test",
    u"category_id": u"id"
}
db.collection(u"problems").add(data)