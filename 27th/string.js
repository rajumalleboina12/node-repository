function magic(fun, msg, no) {
  if (no != null && typeof no === "number") {
    if (msg != null && typeof msg === "string") {
      return fun(msg, no);
    }
  }
}

magic(
  function (msg, no) {
    for (var i = 1; i <= no; i++) {
      console.log(msg);
    }
  },
  "Chaitali",
  3
);
console.log(magic((msg, no) => msg.charAt(no), "JavaScript", 6));
console.log(
  magic((msg, no) => msg.substring(0, no), "I love JavaScript world", 20)
);
