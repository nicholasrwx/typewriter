//getting in index in a for-of loop
//strings don't index the same as arrays.
//strings return the first index found for a character every time
//indexing isn't incremental, therefore you need to switch to an array
//and call .entries() on the array to get both an index and a character
let sentence = "hello there from lighthouse labs";

let t = 0;
for (let [i, char] of sentence.split("").entries()) {
  setTimeout(
    i === sentence.length - 1
      ? () => console.log(char)
      : () => process.stdout.write(char),
    (t += 50)
  );
}

// with a \n character in the string instead of switching to a console.log at the end
// less code, and no need for an index
//UNCOMMENT BELOW TO RUN:

// const sentence = "hello there from lighthouse labs\n";
// let t = 0;
// for (const char of sentence) {
//   setTimeout(() => process.stdout.write(char), (t += 50));
// }
