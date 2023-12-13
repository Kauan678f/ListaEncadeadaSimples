let listUse = require("../list")
// listUse.insert(22, 7) // 1
// listUse.add(14)
// listUse.add(41)
// listUse.add(14)
// listUse.insert(12)
describe("Lista encadeada", () => {
    test("add", () => {
        response = listUse.add(14)
        expect(response).toBe(true)
    })

    test("delete", () => {
        response = listUse.delete(0)
        expect(response).toBe(true)
    })

    test("insert", () => {
        response = listUse.insert(0)
        expect(response).toBe(true)
    })

    test("print", () => {
        response = listUse.print()
        expect(response).toBe(true)
    })
})