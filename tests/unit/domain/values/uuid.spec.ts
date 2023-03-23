
import {isUUID, uuid} from "@domain/values/UUID";

describe("UUID", () => {
  it("Will generate a valid, unique UUID", () => {
    const id = uuid();
    expect(id).toHaveLength(36);
    const id2 = uuid();
    expect(id).not.toEqual(id2);
  });

  it("Will validate uuids correctly", () => {
    const validUUID = "9f4155c7-8e30-4963-b94b-9ea6fb95b4f9";
    const invalidUUID = "not-a-uuid";
    expect(isUUID(validUUID)).toBe(true);
    expect(isUUID(invalidUUID)).toBe(false);

  });
});
