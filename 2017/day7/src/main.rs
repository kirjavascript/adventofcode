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

#[derive(Debug)]
struct Node {
    name: String,
    weight: u32,
    children_data: Vec<String>, // used in the intial pass
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
                    // children: Vec::new(),
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

            let mut current = &nodes.iter().nth(0).unwrap().name;

            let result = loop {
                match nodes.iter().find(|&n| {
                    n.children_data.contains(current)
                }) {
                    Some(q) => current = &q.name,
                    None => break current,
                }
            };

            println!("{:#?}", result);
        },
        Err(e) => println!("{}", e),
    }
}
