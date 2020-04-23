let butInputName = document.getElementById('button-input-value');
butInputName.onclick = function t1() {
    let li = document.createElement('tr');
    let name = document.querySelector('.input-name').value
    li.innerHTML = `
    <td>
        <input type="checkbox" class="checkbox" id="qwe">
    </td>
    <td class="name-list">
        <p class="p_input" id="Name">${name}</p>
    </td>
    <td class="editing-list">
        <div class="editing">
            <img src="images/UpDown.png" alt="UpDown" onclick="change(this)" class="trUp">
            <div class="vl"></div>
            <img src="images/pen.png" alt="editing" class="editing-name">
            <div class="vl"></div>
            <a onclick="service.removeRow(this);" href="#"><img src="images/basket.png" alt="basket" class="clear"></a>
        </div>
    </td>`;
    document.querySelector('tbody').append(li);
    t3();
}

// ----------- delite -----------
let service = {
    removeRow: function (el) {
        el.closest('tr').remove();
    }
}

//  --------- checked -----------

function t3() {
    let k = document.querySelectorAll('.checkbox');
    let td = document.querySelectorAll('tr');
    for (var i = 0; i < k.length; i++) {
        k[i].onchange = function () {
            Array.from(k).map((v, i) => {
                if (v.checked) {
                    Array.from(td)[i].style.cssText = "background-color:green";
                }
                else {
                    Array.from(td)[i].style.cssText = "";
                }
            })
        }
    }
}

// ---------- change Name --------- 

document.addEventListener(`click`, e => {
    if (e.target.classList.contains(`editing-name`)) {
        let paragraph = e.target.parentElement.parentElement.previousElementSibling.firstElementChild;
        let x = document.createElement('input');
        x.classList.add('NameCh');
        paragraph.innerHTML = ' ';
        paragraph.append(x);
        x.addEventListener('keydown', function (e) {
            if (e.keyCode === 13) {
                paragraph.innerHTML = x.value;
            }
        });
    }
})

// ----------------- trUp -------------------
function change(i) {
    var tr1, tr2;
    if (!(tr1 = document.getElementsByTagName('tr')[0]) || !(tr2 = i.closest('tr')))
        return;
    tr2.parentNode.insertBefore(tr2, tr1);
}


