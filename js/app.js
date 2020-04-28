  const form = document.querySelector('form');
        const ul = document.querySelector('tbody');
        const input = document.getElementById('item');
        const addItem = document.getElementById('addItem');
        let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
 
 
        // ------------------- add tr ---------------------
 
        const liMaker = (text) =>
        {
 
            const li = document.createElement('tr');
            li.innerHTML = `
    <td>
        <input type="checkbox" class="checkbox" id="qwe">
    </td>
    <td class="name-list">
        <p class="p_input" id="Name">${text}</p>
    </td>
    <td class="editing-list">
        <div class="editing">
             <img src="images/UpDown.png" alt="UpDown" onclick="change(this)" class="trUp">
            <div class="vl"></div>
            <img src="images/pen.png" alt="editing" class="editing-name">
            <div class="vl"></div>
           <a href="#"><img src="images/basket.png" alt="basket" class="clear"></a>
        </div>
    </td>`;
            function clickListener(evt)
            {
                if (evt.target.className == "clear")
                {
                    let tr = evt.currentTarget;
                    tr.removeEventListener("click", clickListener);
                    window.onunload = function (evt)
                    {
                        localStorage.setItem("items", JSON.stringify(itemsArray));
                    }
 
                    itemsArray.splice(itemsArray.indexOf(text), 1);
                    tr.parentElement.removeChild(tr);
                }
            }
            li.addEventListener("click", clickListener)
            ul.appendChild(li);
            t3();
        }
 
        // ------------------- function ---------------------
 
        form.addEventListener('submit', function (e)
        {
            e.preventDefault();
            if (itemsArray.includes(input.value))
            {
                input.value = "";
                return;
            }
            itemsArray.push(input.value);
            liMaker(input.value);
            input.value = "";
        });
 
        itemsArray.forEach(item =>
        {
            liMaker(item);
 
        });
 
        window.onunload = function (evt)
        {
            localStorage.setItem("items", JSON.stringify(itemsArray));
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
 



