import { GET } from "../route";

describe("GET /api/health", () => {
  it("returns status ok", async () => {
    const res = await GET();
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body.status).toBe("ok");
    expect(body.service).toBe("sbb-frontend");
    expect(body.timestamp).toBeDefined();
  });
});
