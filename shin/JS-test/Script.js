window.addEventListener('load', init)

function init() {

    const width = 960
    const height = 540

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector(('#myCanvas'))
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    //Scene
    const scene = new THREE.Scene();


    //camera
    const camera = new THREE.PerspectiveCamera(400, width/height);
    camera.position.set(0, 0, +1000);

    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);

    scene.add(box);

    tick();

    //run this code every each frame
    function tick() {
        box.rotation.y += 0.01;
        renderer.render(scene ,camera);

        requestAnimationFrame(tick);

    }

    

}