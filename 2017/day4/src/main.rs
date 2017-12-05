use std::env;
use std::fs::File;
use std::io::prelude::*;

fn main() {
    aoc4();
}

fn aoc4() {
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

    let lines = contents.split("\n");
    let mut count = 0;

    for passphrase in lines {
        if is_valid(passphrase) {
            count += 1;
        }
    }

    println!("{:#?}", (count));
}

fn is_valid(passphrase: &str) -> bool {
    let mut collect: Vec<&str> = Vec::new();

    if passphrase.split(" ").count() < 2 {
        return false;
    }

    for word in passphrase.split(" ") {
        for prev in collect.iter() {
            if prev == &word {
                return false;
            }
        }

        collect.push(word);
    }
    true
}
