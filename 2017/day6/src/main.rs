use std::collections::HashSet;

fn main() {
    let input = "5	1	10	0	1	7	13	14	3	12	8	10	7	12	0	6";
    const BANK_QTY: usize = 16;

    // setup memory banks
    let mut banks: [u32; BANK_QTY] = [0; BANK_QTY];

    // set slots to initial values
    for (index, element) in input.split("\t").enumerate() {
        banks[index] = element.parse::<u32>().unwrap();
    }

    let index = get_max_index(&banks);

    let mut set = HashSet::new();
    let mut iteration = 0;


    let result = loop {
        // println!("{:?}", (banks));

        // add array to hashset and check lengths
        set.insert(banks.clone());
        iteration += 1;

        if iteration != set.len() {
            break set.len();
        }

        // iterate
        let index = get_max_index(&banks);
        let high_slot = banks[index];
        banks[index] = 0;

        for i in 0..high_slot {
            banks[(1 + index + i as usize) % BANK_QTY] += 1;
        }
    };

    println!("{:?}", result);
}

fn get_max_index(banks: &[u32]) -> usize {
    let max = banks.iter().max().unwrap();
    banks.iter().position(|&p| p == *max).unwrap()
}
