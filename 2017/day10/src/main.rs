use std::ops::Range;

const INPUT: &str = "34,88,2,222,254,93,150,0,199,255,39,32,137,136,1,167";

fn cycle(list: &mut Vec<i32>, qty: usize) {
    for _ in 0..qty {
        let first = list.remove(0);
        let len = list.len();
        list.insert(len, first);
    }
}

fn flip(list: &mut Vec<i32>, qty: usize) {
    let range: Range<usize> = Range { start: 0, end: qty };
    let slice = &mut list[range];
    slice.reverse();
}

fn main() {
    let to_i32 = |s: &str| s.parse::<i32>().unwrap();

    let list_size: usize = 256;

    let lengths: Vec<i32> = INPUT.split(",").map(to_i32).collect();
    let mut list = (0..list_size as i32).collect::<Vec<i32>>();
    let mut skip = 0;
    let mut pos: usize = 0;

    for v in lengths {
        let value = v as usize;
        flip(&mut list, value);
        cycle(&mut list, value + skip);
        pos += value + skip;
        skip += 1;
    }

    // restore order of list
    cycle(&mut list, list_size - (pos % list_size));

    println!("{:?}", list[0] * list[1]);
}
