import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const git = simpleGit();
const path = "./data.json";

const markCommit = async (x, y) => {
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format("YYYY-MM-DDTHH:mm:ss");

  const data = { date };

  console.log("Creating commit for:", date);

  await jsonfile.writeFile(path, data);
  await git.add(path);
  await git.commit(date, { "--date": date });
  await git.push();

  console.log("Commit pushed.");
};

markCommit(1, 1);