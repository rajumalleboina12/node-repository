const AWS = require("aws-sdk");
//const path = require("path");

const s3 = new AWS.S3({
  accessKeyId: "AKIAWSSKOCVAZDQCDHWK",
  secretAccessKey: "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",
  Bucket: "rajusamplebuck1",
});

const params = {
  Bucket: "rajusamplebuck1",
  Key: "raju.txt",
};

const s3delete = function (params) {
  return new Promise((resolve, reject) => {
    s3.createBucket(
      {
        Bucket: "rajusamplebuck1",
      },
      function () {
        s3.deleteObject(params, function (err, data) {
          if (err) console.log(err);
          else console.log("Successfully deleted file from bucket");
          console.log(data);
        });
      }
    );
  });
};
