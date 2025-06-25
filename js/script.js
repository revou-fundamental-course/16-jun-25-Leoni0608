const toggleBtn = document.getElementById("toggle-btn");
const chatBox = document.getElementById("box");
const toggleBtns = document.getElementById("toggle-btns");
const chatBoxs = document.getElementById("boxs");
const alasj = document.getElementById("alasj");
const tinggij = document.getElementById("tinggij");
const sa = document.getElementById("sisiaj");
const sb = document.getElementById("sisibj");
const alas = document.getElementById("alass");
const tinggi = document.getElementById("tinggis");
const k1 = document.getElementById("sisias");
const k2 = document.getElementById("sisibs");
const k3 = document.getElementById("sisics");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const output4 = document.getElementById("output4");

$("#keterangan1").css("display", "none");
$("#keterangan4").css("display", "none");
$("#keterangan7").css("display", "none");
$("#keterangan10").css("display", "none");
// $("#output1").css("display", "none");
$("#output2").css("display", "none");
$("#output3").css("display", "none");
$("#output4").css("display", "none");

let isMinimized = true;
let isMinimizeds = true;

toggleBtn.addEventListener("click", () => {
    if (isMinimized) {
        chatBox.style.display = "block";
        toggleBtn.textContent = "Jajar Genjang";
        toggleBtn.classList.remove("maximized");
        toggleBtn.classList.add("minimized");
    } else {
        chatBox.style.display = "none";
        toggleBtn.textContent = "Jajar Genjang";
        toggleBtn.classList.remove("minimized");
        toggleBtn.classList.add("maximized");
    }
    isMinimized = !isMinimized;
});

toggleBtns.addEventListener("click", () => {
    if (isMinimizeds) {
        chatBoxs.style.display = "block";
        toggleBtns.textContent = "Segitiga";
        toggleBtns.classList.remove("maximizeds");
        toggleBtns.classList.add("minimizeds");
    } else {
        chatBoxs.style.display = "none";
        toggleBtns.textContent = "Segitiga";
        toggleBtns.classList.remove("minimizeds");
        toggleBtns.classList.add("maximizeds");
    }
    isMinimizeds = !isMinimizeds;
});

function hitung_ljajar() {
    const alasj = document.getElementById("alasj");
    const tinggij = document.getElementById("tinggij");
    const aj = parseInt(alasj.value);
    const tj = parseInt(tinggij.value);
    if (!alasj.value || !tinggij.value) {
        $("#keterangan1").css("display", "none");
        $("#keterangan2").css("display", "none");
        $("#keterangan3").css("display", "none");
        output1.innerHTML = `<strong>Semua Wajib di isi !!</strong>`;
        output1.style.display = "block";
        return;
        // alert("Nominal tidak boleh 0");
        // document.getElementById("keterangan13").innerText = 'Nominal tidak boleh 0 atau kosong';
    } else if (alasj.value == 0 || tinggij.value == 0) {
        $("#keterangan1").css("display", "none");
        $("#keterangan2").css("display", "none");
        $("#keterangan3").css("display", "none");
        output1.innerHTML = `<strong>Tidak boleh ada yang bernilai 0 !!</strong>`;
        output1.style.display = "block";
        return;
        // alert("Nominal tidak boleh 0");
        // document.getElementById("keterangan13").innerText = 'Nominal tidak boleh 0 atau kosong';
    } else {
        $("#keterangan1").slideDown("fast");
        $("#keterangan2").slideDown("fast");
        $("#keterangan3").slideDown("fast");
        document.getElementById("keterangan2").innerHTML = 'L = ' + aj + ' * ' + tj;
        var resultj = aj * tj;
        document.getElementById("keterangan3").innerHTML = 'L = ' + resultj + ' cm<sup>2</sup>';
        //Tampilkan hasil
        output1.innerHTML = `<strong>Nilai berhasil di hitung, alas ${aj} dan tinggi ${tj}</strong>`;
        output1.style.display = "block";
    }
}

function hitung_kjajar() {
    // const sa = document.getElementById("sisiaj");
    // const sb = document.getElementById("sisibj");
    const saj = parseInt(sa.value);
    const sbj = parseInt(sb.value);
    if (!sa.value || !sb.value) {
        $("#keterangan4").css("display", "none");
        $("#keterangan5").css("display", "none");
        $("#keterangan6").css("display", "none");
        output2.innerHTML = `<strong>Semua Wajib di isi !!</strong>`;
        output2.style.display = "block";
        return;
    } else if (sa.value == 0 || sb.value == 0) {
        $("#keterangan4").css("display", "none");
        $("#keterangan5").css("display", "none");
        $("#keterangan6").css("display", "none");
        output2.innerHTML = `<strong>Tidak boleh ada yang bernilai 0 !!</strong>`;
        output2.style.display = "block";
        return;
    } else {
        $("#keterangan4").slideDown("fast");
        $("#keterangan5").slideDown("fast");
        $("#keterangan6").slideDown("fast");
        document.getElementById("keterangan5").innerHTML = 'K = 2 * (' + sa.value + ' + ' + sb.value + ') ';
        const result = 2 * (saj + sbj);
        document.getElementById("keterangan6").innerHTML = 'K = ' + result + ' cm';
        //Tampilkan hasil
        output2.innerHTML = `<strong>Nilai berhasil di hitung, sisi a ${saj} dan sisi b ${sbj}</strong>`;
        output2.style.display = "block";
    }
}

function hitung_lsegitiga() {
    // const alas = document.getElementById("alass");
    // const tinggi = document.getElementById("tinggis");
    const as = parseInt(alas.value);
    const ts = parseInt(tinggi.value);
    if (!alas.value || !tinggi.value) {
        $("#keterangan7").css("display", "none");
        $("#keterangan8").css("display", "none");
        $("#keterangan9").css("display", "none");
        output3.innerHTML = `<strong>Semua Wajib di isi !!</strong>`;
        output3.style.display = "block";
        return;
    } else if (alas.value == 0 || tinggi.value == 0) {
        $("#keterangan7").css("display", "none");
        $("#keterangan8").css("display", "none");
        $("#keterangan9").css("display", "none");
        output3.innerHTML = `<strong>Tidak boleh ada yang bernilai 0 !!</strong>`;
        output3.style.display = "block";
        return;
    } else {
        $("#keterangan7").slideDown("fast");
        $("#keterangan8").slideDown("fast");
        $("#keterangan9").slideDown("fast");
        document.getElementById("keterangan8").innerHTML = 'L = 1/2 * ' + alas.value + ' * ' + tinggi.value;
        var results = 0.5 * as * ts;
        document.getElementById("keterangan9").innerHTML = 'L = ' + results + ' cm<sup>2</sup>';

        //Tampilkan hasil
        output3.innerHTML = `<strong>Nilai berhasil di hitung, alas ${as} dan tinggi ${ts}</strong>`;
        output3.style.display = "block";
    }
}

function hitung_ksegitiga() {
    // const k1 = document.getElementById("sisias");
    // const k2 = document.getElementById("sisibs");
    // const k3 = document.getElementById("sisics");
    const a = parseInt(k1.value);
    const b = parseInt(k2.value);
    const c = parseInt(k3.value);
    if (!k1.value || !k2.value || !k3.value) {
        $("#keterangan10").css("display", "none");
        $("#keterangan11").css("display", "none");
        $("#keterangan12").css("display", "none");
        output4.innerHTML = `<strong>Semua Wajib di isi !!</strong>`;
        output4.style.display = "block";
        return;
    } else if (k1.value == 0 || k2.value == 0 || k3.value == 0) {
        $("#keterangan10").css("display", "none");
        $("#keterangan11").css("display", "none");
        $("#keterangan12").css("display", "none");
        output4.innerHTML = `<strong>Tidak boleh ada yang bernilai 0 !!</strong>`;
        output4.style.display = "block";
        return;
    } else {
        $("#keterangan10").slideDown("fast");
        $("#keterangan11").slideDown("fast");
        $("#keterangan12").slideDown("fast");
        document.getElementById("keterangan11").innerHTML = 'K = ' + k1.value + ' + ' + k2.value + ' + ' + k3.value;
        const result = a + b + c;
        document.getElementById("keterangan12").innerHTML = 'K = ' + result + 'cm';

        //Tampilkan hasil
        output4.innerHTML = `<strong>Nilai berhasil di hitung, sisi 1 ${a} sisi 2 ${b} dan sisi 3 ${c}</strong>`;
        output4.style.display = "block";
    }
}

function reset_ljajar() {
    var d = document.getElementById("alasj");
    var e = document.getElementById("tinggij");
    d.value = "";
    e.value = "";
    $("#keterangan1").css("display", "none");
    $("#keterangan2").css("display", "none");
    $("#keterangan3").css("display", "none");
    output1.innerHTML = `<strong>Nilai berhasil di reset</strong>`;
    output1.style.display = "block";
}

function reset_kjajar() {
    var f = document.getElementById("sisiaj");
    var g = document.getElementById("sisibj");
    f.value = "";
    g.value = "";
    $("#keterangan4").css("display", "none");
    $("#keterangan5").css("display", "none");
    $("#keterangan6").css("display", "none");
    output2.innerHTML = `<strong>Nilai berhasil di reset</strong>`;
    output2.style.display = "block";
}

function reset_lsegitiga() {
    var h = document.getElementById("alass");
    var i = document.getElementById("tinggis");
    h.value = "";
    i.value = "";
    $("#keterangan7").css("display", "none");
    $("#keterangan8").css("display", "none");
    $("#keterangan9").css("display", "none");
    output3.innerHTML = `<strong>Nilai berhasil di reset</strong>`;
    output3.style.display = "block";
}

function reset_ksegitiga() {
    var j = document.getElementById("sisias");
    var k = document.getElementById("sisibs");
    var l = document.getElementById("sisics");
    j.value = "";
    k.value = "";
    l.value = "";
    $("#keterangan10").css("display", "none");
    $("#keterangan11").css("display", "none");
    $("#keterangan12").css("display", "none");
    output4.innerHTML = `<strong>Nilai berhasil di reset</strong>`;
    output4.style.display = "block";
}