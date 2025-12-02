import Music from "../schema/music.schema.js";

export const createMusic = async (req, res) => {
  try {
    const { title, artist, album, genre, url } = req.body;

    if (!url) return res.status(400).json({ message: "Music URL required" });

    const track = await Music.create({
      title,
      artist,
      album,
      genre,
      url
    });

    res.json({ message: "Track saved", track });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllMusic = async (req, res) => {
  const tracks = await Music.find().sort({ createdAt: -1 });
  res.json(tracks);
};

export const getMusic = async (req, res) => {
  const track = await Music.findById(req.params.id);
  if (!track) return res.status(404).json({ message: "Not found" });
  res.json(track);
};
