const password = require("../index.js");

test("Checks if entropy calculates correctly", () => {
    expect(password("s3fJh4o9").entropy).toBe(41.3594000115385);
});
test("Checks if entropy calculates correctly for long password", () => {
    expect(password("s3fJh4o9").entropy).toBe(41.3594000115385);
});

test("Checks if text is displayed correctly", () => {
    expect(
        password(
            "NGJxjy9nvMfiVWuTGjzMZBWcxqZpGEs2mNFvEwmdbvo3QFQBtXReFq6bnmtpYdUe"
        ).text
    ).toBe("Very strong");
});
test("Checks if text is displayed correctly for long password", () => {
    expect(
        password(
            "NGJxjy9nvMfiVWuTGjzMZBWcxqZpGEs2mNFvEwmdbvo3QFQBtXReFq6bnmtpYdUe"
        ).entropy
    ).toBe(330.875200092308);
});
