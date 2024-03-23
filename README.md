# Hello World

[docs](https://docs.wasmer.io/registry/get-started)

Rust wasm package,rust to wasm and publish package

This package print an array and "Hello World"

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("the value is: {element}");
    }
    let x = "Hello";
    println!("{x}, world!");
}
```


```bash

git clone https://github.com/nowo/wasm-hello.git
cd wasm-hello


# 构建
rustup target add wasm32-wasi
cargo build --target=wasm32-wasi

# 运行
wasmer run . --command=wasm-hello

```


