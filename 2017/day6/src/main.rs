const BANK_QTY: usize = 16;

fn main() {
    let input = "5	1	10	0	1	7	13	14	3	12	8	10	7	12	0	6";

    // setup memory banks
    let mut banks: [u32; BANK_QTY] = [0; BANK_QTY];

    // set slots to initial values
    for (index, element) in input.split("\t").enumerate() {
        banks[index] = element.parse::<u32>().unwrap();
    }

    let mut history: Vec<_> = Vec::new();

    let result = loop {
        // check if prev exists
        if history.iter().any(|&d| d == banks) {
            let pos = history.iter().position(|&p| p == banks).unwrap();
            break (pos, banks, history.iter().count() - pos);
        }
        // count it
        history.push(banks);

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
