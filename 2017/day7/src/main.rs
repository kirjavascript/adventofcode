extern crate regex;

use std::env;
use std::fs::File;
use std::io::prelude::*;
use regex::Regex;

fn get_file() -> Result<String, &'static str> {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        return Err("Error reading file");
    }
    let filename = &args[1];

    let mut f = File::open(filename).expect("file not found");

    let mut contents = String::new();
    f.read_to_string(&mut contents)
        .expect("something went wrong reading the file");
    Ok(contents)
}

#[derive(Debug)] // used in the intial pass
struct Node {
    name: String,
    weight: u32,
    children_data: Vec<String>,
}

#[derive(Debug)]
struct TreeNode {
    name: String,
    weight: u32,
    children: Vec<Node>,
}

fn main() {
    match get_file() {
        Ok(contents) => {
            let lines = contents
                .split("\n")
                .filter(|&s| s.len() != 0)
                .collect::<Vec<&str>>();

            let mut nodes: Vec<Node> = Vec::new();

            let re = Regex::new(r"(\w+) \((\d+)\)( -> (.*))?").unwrap(); // uses 'raw string'

            for datum in lines {

                // groups;
                // test (00) -> test, test
                // 1     2      4
                let capt = re.captures(datum).unwrap();

                let mut node = Node {
                    name: String::from(capt.get(1).unwrap().as_str()),
                    weight: capt.get(2)
                        .unwrap()
                        .as_str()
                        .parse::<u32>()
                        .unwrap(),
                    children_data: match capt.get(4) {
                        Some(v) => v.as_str()
                            .split(", ")
                            .map(|s| s.to_string())
                            .collect(),
                        None => Vec::new(),
                    },
                };

                nodes.push(node);
            }

            // traverse to parent node
            let mut current = &nodes.iter().nth(0).unwrap().name;
            let result = loop {
                match nodes.iter().find(|&n| {
                    n.children_data.contains(current)
                }) {
                    Some(q) => current = &q.name,
                    None => break current,
                }
            };

            println!("part 1: {}", result);

            // // create a real tree
            // let mut tree: Vec<Node> = Vec::new();

            println!("{:#?}", nodes.len());

            let root = nodes.iter().find(|&n| n.name == *result).unwrap();

            let tree_root = TreeNode {
                name: root.name.clone(),
                weight: root.weight,
                children: Vec::new(),
            };

            println!("{:?}", (nodes.len(), root, tree_root));
        },
        Err(e) => println!("{}", e),
    }
}

// Wandering further through the circuits of the computer, you come upon a tower of programs that have gotten themselves into a bit of trouble. A recursive algorithm has gotten out of hand, and now they're balanced precariously in a large tower.

// One program at the bottom supports the entire tower. It's holding a large disc, and on the disc are balanced several more sub-towers. At the bottom of these sub-towers, standing on the bottom disc, are other programs, each holding their own disc, and so on. At the very tops of these sub-sub-sub-...-towers, many programs stand simply keeping the disc below them balanced but with no disc of their own.

// You offer to help, but first you need to understand the structure of these towers. You ask each program to yell out their name, their weight, and (if they're holding a disc) the names of the programs immediately above them balancing on that disc. You write this information down (your puzzle input). Unfortunately, in their panic, they don't do this in an orderly fashion; by the time you're done, you're not sure which program gave which information.

// For example, if your list is the following:

// pbga (66)
// xhth (57)
// ebii (61)
// havc (66)
// ktlj (57)
// fwft (72) -> ktlj, cntj, xhth
// qoyq (66)
// padx (45) -> pbga, havc, qoyq
// tknk (41) -> ugml, padx, fwft
// jptl (61)
// ugml (68) -> gyxo, ebii, jptl
// gyxo (61)
// cntj (57)

// ...then you would be able to recreate the structure of the towers that looks like this:

//                 gyxo
//               /
//          ugml - ebii
//        /      \
//       |         jptl
//       |
//       |         pbga
//      /        /
// tknk --- padx - havc
//      \        \
//       |         qoyq
//       |
//       |         ktlj
//        \      /
//          fwft - cntj
//               \
//                 xhth

// In this example, tknk is at the bottom of the tower (the bottom program), and is holding up ugml, padx, and fwft. Those programs are, in turn, holding up other programs; in this example, none of those programs are holding up any other programs, and are all the tops of their own towers. (The actual tower balancing in front of you is much larger.)

// Before you're ready to help them, you need to make sure your information is correct. What is the name of the bottom program?

// Your puzzle answer was ykpsek.

// The first half of this puzzle is complete! It provides one gold star: *
// --- Part Two ---

// The programs explain the situation: they can't get down. Rather, they could get down, if they weren't expending all of their energy trying to keep the tower balanced. Apparently, one program has the wrong weight, and until it's fixed, they're stuck here.

// For any program holding a disc, each program standing on that disc forms a sub-tower. Each of those sub-towers are supposed to be the same weight, or the disc itself isn't balanced. The weight of a tower is the sum of the weights of the programs in that tower.

// In the example above, this means that for ugml's disc to be balanced, gyxo, ebii, and jptl must all have the same weight, and they do: 61.

// However, for tknk to be balanced, each of the programs standing on its disc and all programs above it must each match. This means that the following sums must all be the same:

//     ugml + (gyxo + ebii + jptl) = 68 + (61 + 61 + 61) = 251
//     padx + (pbga + havc + qoyq) = 45 + (66 + 66 + 66) = 243
//     fwft + (ktlj + cntj + xhth) = 72 + (57 + 57 + 57) = 243

// As you can see, tknk's disc is unbalanced: ugml's stack is heavier than the other two. Even though the nodes above ugml are balanced, ugml itself is too heavy: it needs to be 8 units lighter for its stack to weigh 243 and keep the towers balanced. If this change were made, its weight would be 60.

// Given that exactly one program is the wrong weight, what would its weight need to be to balance the entire tower?
