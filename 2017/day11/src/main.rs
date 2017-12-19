mod input;

use input::get_path;
use input::Direction;

#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
    z: i32,
}

impl Point {
    fn _move(&mut self, direction: &Direction) {
        match direction {
            &Direction::Ne => {self.x += 1; self.z -= 1;},
            &Direction::Se => {self.x += 1; self.y -= 1;},
            &Direction::S => {self.z += 1; self.y -= 1;},
            &Direction::Sw => {self.z += 1; self.x -= 1;},
            &Direction::Nw => {self.y += 1; self.x -= 1;},
            &Direction::N => {self.y += 1; self.z -= 1;},
        }
    }

    fn max_abs(&self) -> i32 {
        self.x.abs().max(self.y.abs()).max(self.z.abs())
    }
}

fn main() {
    let path: Vec<Direction> = get_path();
    let mut pos = Point { x: 0, y: 0, z: 0 };
    let mut top = 0;

    path.iter().for_each(|d| {
        pos._move(&d);
        top = top.max(pos.max_abs())
    });

    println!("{:?}", (pos.max_abs(), top));
}
