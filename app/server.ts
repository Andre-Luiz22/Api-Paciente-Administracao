import { app } from "./src/app";
import "dotenv/config";

const PORT = process.env.PORT;

console.log(PORT);

app.listen(PORT, () => {
  console.log(`servidor está escutando na porta ${PORT}`);
});
