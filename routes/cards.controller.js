import Cards from "./cardsSchema.js";

export const getCards = async (req, res) => {
  try {
    const cards = await Cards.find();
    res.json(cards);
  } catch (err) {
    res.status(401).json(err);
    console.log("err");
  }
};

export const createCard = async (req, res) => {
  const newCard = req.body;
  await Cards.create(newCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};


export const deleteCard = async (req, res) => {
  const id = req.params.id;
  await Cards.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
};
