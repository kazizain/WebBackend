const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index"); // Assuming your main file is named index.js

chai.use(chaiHttp);
chai.should();

describe("Login Route", () => {
  // it("should log in a user with valid credentials", (done) => {
  //   chai
  //     .request(app)
  //     .post("/api/login")
  //     .send({ email: "fayezshahid167@gmail.com", password: "Fayez@2002" })
  //     .end((err, res) => {
  //       // Handle any potential errors
  //       if (err) {
  //         return done(err);
  //       }

  //       // Make assertions on the response
  //       res.should.have.status(200);
  //       res.body.should.have.property("data");
  //       res.body.should.have.property("message").equal("Logged in successfully");

  //       // Signal that the test is complete
  //       done();
  //     });
  // });

  it("should return 400 with invalid email and password format", (done) => {
    chai
      .request(app)
      .post("/api/login")
      .send({ email: "invalidemail", password: "invalidpassword" })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("message").equal('"Email" must be a valid email');
        done();
      });
  });

  // it("should return 401 with invalid credentials", (done) => {
  //   chai
  //     .request(app)
  //     .post("/api/login")
  //     .send({ email: "nonexistent@example.com", password: "Wrongpassword@123" })
  //     .end((err, res) => {
  //       res.should.have.status(401);
  //       res.body.should.have.property("message").equal("Invalid Email or Password");
  //       done();
  //     });
  // });
});
