import chai from "chai";
import sinon from "sinon";
import { loginFunction } from "../services/login";
import { protectFunction } from "../services/protected";

import * as db from "../db";

const expect = chai.expect;

const user = {
  username: "admin",
  password:
    "15e24a16abfc4eef5faeb806e903f78b188c30e4984a03be4c243312f198d1229ae8759e98993464cf713e3683e891fb3f04fbda9cc40f20a07a58ff4bb00788",
  salt: "F^S%QljSfV",
  role: "admin",
};

describe("loginFunction()", function () {
  it("Test login", function () {
    sinon.stub(db, "getUserByUsername").resolves(user);

    return loginFunction("admin", "secret").then((token) => {
      expect(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI"
      ).to.be.equal(token);
    });
  });
});

describe("protectFunction()", function () {
  it("Test protected", function () {
    protectFunction(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzYzNDU3NDF9.umQ9WC-FtYDZxxsB1c8pWLFWeDPr1LHhFrkvvdQ87jQ"
    ).then((data) => {
      expect("You are under protected data").to.be.equal(data);
    });
  });
});
