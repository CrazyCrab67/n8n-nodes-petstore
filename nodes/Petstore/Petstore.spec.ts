import {hornet} from "./hornet.node";

test("smoke", () => {
    const node = new hornet()
    expect(node.description.properties).toBeDefined()
})
