use std::env;
use std::fs::File;
use std::io::prelude::*;

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

    let mut qty: Vec<i32> = Vec::new();

    // let list = list.map()
    for num in contents.split("\n") {
        if num != "" {
            let digit = num.parse::<i32>().unwrap();
            qty.push(digit);
        }
    }


    println!("{:?}", qty);
}
