use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::collections::HashSet;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        println!("bork");
        return;
    }
    let filename = &args[1];

    let mut f = File::open(filename).expect("file not found");

    let mut contents = String::new();
    f.read_to_string(&mut contents)
        .expect("something went wrong reading the file");

    aoc4(&contents);
}

fn aoc4(contents: &String) {

    let lines = contents.split("\n");
    let mut count = 0;

    for passphrase in lines {
        if is_valid(passphrase) && passphrase != "" {
            count += 1;
        }
    }

    println!("{:#?}", (count));
}

fn is_valid(passphrase: &str) -> bool {

    // part 1
    // let mut collect = passphrase.split(" ").collect::<HashSet<&str>>();

    // part 2
    let mut collect = HashSet::new();
    for x in passphrase.split(" ") {
        let mut chars: Vec<char> = x.chars().collect();
        chars.sort_by(|a, b| b.cmp(a));

        collect.insert(chars);
    }

    passphrase.split(" ").count() == collect.len()
}
