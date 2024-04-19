import { removeTV } from "../app/utilities/removeTaylorsVersion"; 

it("removes the string '(Taylor's Version) from input string", () => {
  //arrange
  const songTitle = "Clean (Taylor's Version), Sparks Fly (Taylor’s Version)"
  const expectedOutput = "Clean , Sparks Fly "
  
  //act
  const actualOutput = removeTV(songTitle);

  //assert  
  expect(actualOutput).toBeDefined();
  expect(actualOutput).toEqual(expectedOutput)
});
