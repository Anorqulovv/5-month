import Albom from "../schema/albom.schema.js";

export const createAlbom = async (req, res) => {
  try {
    const { title, artist} = req.body;

    if (!title) return res.status(400).json({ message: "Music URL required" });

    const albom = await Albom.create({
      title,
      artist
    });

    res.json({ message: "Albom saved", albom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllAlbom = async (req, res) => {
  const alboms = await Albom.find().sort({ createdAt: -1 });
  res.json(alboms);
};

export const getAlbom = async (req, res) => {
  const albom = await Albom.findById(req.params.id);
  if (!albom) return res.status(404).json({ message: "Not found" });
  res.json(albom);
};