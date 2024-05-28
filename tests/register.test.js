const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index"); // Assuming your main file is named index.js

chai.use(chaiHttp);
chai.should();

describe("Register Route", () => {
  it("should return 400 with invalid email format", (done) => {
    chai
      .request(app)
      .post("/api/register")
      .send({ firstName: 'abc', lastName: 'xyz', email: "invalidemail", password: "newpassword123" })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("message").equal('"Email" must be a valid email');
        done();
      });
  });

  // it("should return 409 if user already exists", (done) => {
  //   chai
  //     .request(app)
  //     .post("/api/register")
  //     .send({ firstName: 'abc', lastName: 'xyz', email: "fayezshahid167@gmail.com", password: "Newpassword@123" })
  //     .end((err, res) => {
  //       res.should.have.status(409);
  //       res.body.should.have.property("message").equal("User with given email already exist!");
  //       done();
  //     });
  // });
});
