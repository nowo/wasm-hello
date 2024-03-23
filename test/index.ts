import { init, Wasmer } from "@wasmer/sdk";

console.log(11111)

await init();

try {
    console.log('执行中...')
    // const pkg = await Wasmer.fromRegistry("python/python");
    // // console.log('pkg :>> ', pkg);
    // const instance = await pkg.entrypoint?.run({
    //     args: ["-c", "print('Hello, World!')"],
    // });

    // const { code, stdout } = await instance!.wait();
    // console.log(`Python exited with ${code}: ${stdout}`);

    const pkg = await Wasmer.fromRegistry("nowo/wasm-hello");
    console.log('pkg :>> ', pkg);
    const instance = await pkg.entrypoint?.run()
    console.log('instance :>> ', instance);
    const { code, stdout } = await instance!.wait();
    console.log(`${code} :>>  ${stdout}`);
} catch (error) {
    console.log('error :>> ', error);
}

