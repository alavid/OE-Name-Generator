window.onload = function() {

    let generate = document.getElementById("generate-button");
    let list = document.getElementById("list");
    let maleButton = document.getElementById("male");
    let femaleButton = document.getElementById("female");
    let prefixBlock = document.getElementById("prefix-block");
    let suffixBlock = document.getElementById("suffix-block");
    let prefixFieldMeaning = document.getElementById("prefix-meaning-option-text");
    let suffixFieldMeaning = document.getElementById("suffix-meaning-option-text");
    let cancel = document.getElementById("clear-button");

    let frontMale = [
        ["ā", "Eternal", "ᚪ"],
        ["ælf", "Elven", "ᚫᛚᚠ"],
        ["æðel", "Noble", "ᚫᚦᛖᛚ"],
        ["beald", "Bold", "ᛒᛠᛚᛞ"],
        ["beorht", "Bright", "ᛒᛇᚱᚻᛏ"],
        ["beorn", "Warrior", "ᛒᛇᚱᚾ"],
        ["brūn", "Brown", "ᛒᚱᚢᚾ"],
        ["cēn", "Bold", "ᚳᛖᚾ"],
        ["cēol", "Ship", "ᚳᛇᛚ"],
        ["cūð", "Renowned", "ᚳᚢᚦ"],
        ["cyne", "Brave", "ᚳᚣᚾᛖ"],
        ["dēor", "Dear", "ᛞᛇᚱ"],
        ["ēad", "Rich", "ᛠᛞ"],
        ["eall", "All", "ᛠᛚᛚ"],
        ["ealh", "Temple", "ᛠᛚᚻ"],
        ["eald", "Old", "ᛠᛚᛞ"],
        ["ecg", "Blade", "ᛖᚳᚷ"],
        ["eofor", "Boar", "ᛇᚠᚩᚱ"],
        ["eoh", "Horse", "ᛇᚻ"],
        ["eorcen", "Pure", "ᛇᚱᚳᚪᚾ"],
        ["engel", "Anglian", "ᛖᛝᛖᛚ"],
        ["frið", "Peaceful", "ᚠᚱᛁᚦ"],
        ["glæd", "Gleaming", "ᚷᛚᚫᛞ"],
        ["gōd", "Good", "ᚷᚩᛞ"],
        ["grim", "Fierce", "ᚷᚱᛁᛗ"],
        ["gūð", "Combat", "ᚷᚢᚦ"],
        ["here", "Army", "ᚻᛖᚱᛖ"],
        ["hild", "Battle", "ᚻᛁᛚᛞ"],
        ["hroð", "Famous", "ᚻᚱᚩᚦ"],
        ["lēof", "Beloved", "ᛚᛇᚠ"],
        ["ōht", "Fearsome", "ᚩᚻᛏ"],
        ["ōs", "Divine", "ᚩᛋ"],
        ["rīc", "Powerful", "ᚱᛁᚳ"],
        ["sǣ", "Sea", "ᛋᚫ"],
        ["sige", "Victorious", "ᛋᛁᚷᛖ"],
        ["stīð", "Hard", "ᛋᛏᛁᚦ"],
        ["sunu", "Son's", "ᛋᚢᚾᚢ"],
        ["swīð", "Strong", "ᛋᚹᛁᚦ"],
        ["þunor", "Thor", "ᚦᚢᚾᚩᚱ"],
        ["þēod", "People's", "ᚦᛇᛞ"],
        ["þegn", "Thane's", "ᚦᛖᚷᚾ"],
        ["wald", "Forest", "ᚹᚪᛚᛞ"],
        ["wæl", "Slaughter", "ᚹᚫᛚ"],
        ["wāð", "Wandering", "ᚹᚪᚦ"],
        ["weald", "Powerful", "ᚹᛠᛚᛞ"],
        ["wīg", "War", "ᚹᛁᚷ"],
        ["wil", "Desired", "ᚹᛁᛚ"],
        ["wine", "Friendly", "ᚹᛁᚾᛖ"],
        ["wulf", "Wolfish", "ᚹᚢᛚᚠ"],
        ["wyn", "Joyous", "ᚹᚣᚾ"]
    ]
    let frontFemale = [
        ["ā", "Eternal", "ᚪ"],
        ["ælf", "Elven", "ᚫᛚᚠ"],
        ["æðel", "Noble", "ᚫᚦᛖᛚ"],
        ["beorht", "Bright", "ᛒᛇᚱᚻᛏ"],
        ["brūn", "Brown", "ᛒᚱᚢᚾ"],
        ["cēn", "Bold", "ᚳᛖᚾ"],
        ["cēol", "Ship", "ᚳᛇᛚ"],
        ["cūð", "Renowned", "ᚳᚢᚦ"],
        ["cwēn", "Queen's", "ᚳᚹᛖᚾ"],
        ["dēor", "Dear", "ᛞᛇᚱ"],
        ["ēad", "Rich", "ᛠᛞ"],
        ["eall", "All", "ᛠᛚᛚ"],
        ["ealh", "Temple", "ᛠᛚᚻ"],
        ["eald", "Old", "ᛠᛚᛞ"],
        ["ecg", "Blade", "ᛖᚳᚷ"],
        ["eofor", "Boar", "ᛇᚠᚩᚱ"],
        ["eoh", "Horse", "ᛇᚻ"],
        ["eorcen", "Pure", "ᛇᚱᚳᚪᚾ"],
        ["engel", "Anglian", "ᛖᛝᛖᛚ"],
        ["glæd", "Gleaming", "ᚷᛚᚫᛞ"],
        ["gōd", "Good", "ᚷᚩᛞ"],
        ["grim", "Fierce", "ᚷᚱᛁᛗ"],
        ["here", "Army", "ᚻᛖᚱᛖ"],
        ["hild", "Battle", "ᚻᛁᛚᛞ"],
        ["hroð", "Famous", "ᚻᚱᚩᚦ"],
        ["lēof", "Beloved", "ᛚᛇᚠ"],
        ["mild", "Gentle", "ᛗᛁᛚᛞ"],
        ["ōs", "Divine", "ᚩᛋ"],
        ["sǣ", "Sea", "ᛋᚫ"],
        ["sige", "Victorious", "ᛋᛁᚷᛖ"],
        ["stīð", "Hard", "ᛋᛏᛁᚦ"],
        ["swīð", "Strong", "ᛋᚹᛁᚦ"],
        ["þunor", "Thor", "ᚦᚢᚾᚩᚱ"],
        ["þēod", "People's", "ᚦᛇᛞ"],
        ["þegn", "Thane's", "ᚦᛖᚷᚾ"],
        ["wald", "Forest", "ᚹᚪᛚᛞ"],
        ["wæl", "Slaughter", "ᚹᚫᛚ"],
        ["wāð", "Hunt", "ᚹᚪᚦ"],
        ["weald", "Powerful", "ᚹᛠᛚᛞ"],
        ["wīg", "War", "ᚹᛁᚷ"],
        ["wil", "Desired", "ᚹᛁᛚ"],
        ["wine", "Friendly", "ᚹᛁᚾᛖ"],
        ["wulf", "Wolf", "ᚹᚢᛚᚠ"],
        ["wyn", "Joyous", "ᚹᚣᚾ"]
    ]
    let backMale = [
        ["beald", "Bold", "ᛒᛠᛚᛞ"],
        ["behrt", "Bright", "ᛒᛇᚱᚻᛏ"],
        ["beorn", "Warrior", "ᛒᛇᚱᚾ"],
        ["dæg", "Day", "ᛞᚫᚷ"],
        ["frið", "Peace", "ᚠᚱᛁᚦ"],
        ["gār", "Spear", "ᚷᚪᚱ"],
        ["hēah", "High", "ᚻᛠᚻ"],
        ["heard", "Bravery", "ᚻᛠᚱᛞ"],
        ["helm", "Helmet", "ᚻᛖᛚᛗ"],
        ["here", "Army", "ᚻᛖᚱᛖ"],
        ["hūn", "Young Bear", "ᚻᚢᚾ"],
        ["lāf", "Heir", "ᛚᚪᚠ"],
        ["mǣre", "Fame", "ᛗᚫᚱᛖ"],
        ["mund", "Protector", "ᛗᚢᚾᛞ"],
        ["nōð", "Boldness", "ᚾᚩᚦ"],
        ["rǣd", "Counsel", "ᚱᚫᛞ"],
        ["rīc", "Power", "ᚱᛁᚳ"],
        ["sige", "Victory", "ᛋᛁᚷᛖ"],
        ["stān", "Stone", "ᛋᛏᚪᚾ"],
        ["þegn", "Thane", "ᚦᛖᚷᚾ"],
        ["þunor", "Thor", "ᚦᚢᚾᚩᚱ"],
        ["weald", "Power", "ᚹᛠᛚᛞ"],
        ["weard", "Guardian", "ᚹᛠᚱᛞ"],
        ["wig", "War", "ᚹᛁᚷ"],
        ["wine", "Friend", "ᚹᛁᚾᛖ"],
        ["wulf", "Wolf", "ᚹᚢᛚᚠ"]
    ]
    let backFemale = [
        ["burg", "City", "ᛒᚢᚱᚷ"],
        ["flæd", "Beauty", "ᚠᛚᚫᛞ"],
        ["gifu", "Gift", "ᚷᛁᚠᚢ"],
        ["gyð", "Battle", "ᚷᚣᚦ"],
        ["hild", "Battle", "ᚻᛁᛚᛞ"],
        ["swīð", "Strength", "ᛋᚹᛁᚦ"],
        ["þrȳð", "Might", "ᚦᚱᚣᚦ"],
        ["wyn", "Joy", "ᚹᚣᚾ"]
    ]

    var mfSelected = -1;

    prefixBlock.style.display = "none";
    suffixBlock.style.display = "none";

    cancel.onclick = function() {

        list.innerHTML = '<p id="starter">Fill the void</p>';
    }

    male.onclick = function() {

        if (mfSelected !== 1) mfSelected = 1;
        else mfSelected = -1;

        setMenuState();
    }

    female.onclick = function() {

        if (mfSelected !== 0) mfSelected = 0;
        else mfSelected = -1;

        setMenuState();
    }

    function setMenuState() {

        var lengthBack;
        var lengthFront;
        var namesBack;
        var namesFront;
        var meaningsBack;
        var meaningsFront;

        if (mfSelected === -1) {

            prefixBlock.style.display = "none";
            suffixBlock.style.display = "none";
            prefix.innerHTML = "<option value='random'>Random</option>";
            suffix.innerHTML = "<option value='random'>Random</option>";

            female.classList.remove("pressed");
            male.classList.remove("pressed");
        }
        else if (mfSelected === 0) {

            prefixBlock.style.display = "block";
            suffixBlock.style.display = "block";
            prefix.innerHTML = "<option value='random'>Random</option>";
            suffix.innerHTML = "<option value='random'>Random</option>";

            female.classList.add("pressed");
            male.classList.remove("pressed");

            for (var i = 0 ; i < frontFemale.length; i++) {

                prefix.innerHTML += "<option value='" + i + "'>"
                    + "<p id='prefix-name-option-text'>" +  frontFemale[i][0] + "</p>"
                    + "<p id='prefix-meaning-option-text'> (" +  frontFemale[i][1] + ")</p>"
                    + "</option>";
            }
            for (var i = 0 ; i < backFemale.length; i++) {

                suffix.innerHTML += "<option value='" + i + "'>"
                    + "<p id='suffix-name-option-text'>" +  backFemale[i][0] + "</p>"
                    + "<p id='suffix-meaning-option-text'> (" +  backFemale[i][1] + ")</p>"
                    + "</option>";
            }
        }
        else if (mfSelected === 1) {

            prefixBlock.style.display = "block";
            suffixBlock.style.display = "block";
            prefix.innerHTML = "<option value='random'>Random</option>";
            suffix.innerHTML = "<option value='random'>Random</option>";

            female.classList.remove("pressed");
            male.classList.add("pressed");

            for (var i = 0 ; i < frontMale.length; i++) {

                prefix.innerHTML += "<option value='" + i + "'>"
                    + "<p id='prefix-name-option-text'>" +  frontMale[i][0] + "</p>"
                    + "<p id='prefix-meaning-option-text'> (" +  frontMale[i][1] + ")</p>"
                    + "</option>";
            }
            for (var i = 0 ; i < backMale.length; i++) {

                suffix.innerHTML += "<option value='" + i + "'>"
                    + "<p id='suffix-name-option-text'>" +  backMale[i][0] + "</p>"
                    + "<p id='suffix-meaning-option-text'> (" +  backMale[i][1] + ")</p>"
                    + "</option>";
            }
        }
    }

    generate.onclick = function() {

        var frontRand;
        var front;
        var backRand;
        var back;
        var name;
        var meaningFront;
        var meaningBack;
        var gender;
        var runic;

        var mf = Math.floor(Math.random() * 2);

        if (mfSelected !== -1) mf = mfSelected;

        if (mf) {

            gender = "<i class='fa fa-mars'></i>";

            frontRand = Math.floor(Math.random() * frontMale.length);
            backRand = Math.floor(Math.random() * backMale.length);

            while (frontMale[frontRand][0] === backMale[backRand][0])
                backRand = Math.floor(Math.random() * backMale.length);

            if (prefix.value !== "random") frontRand = prefix.value;
            if (suffix.value !== "random") backRand = suffix.value;

            front = frontMale[frontRand][0];
            back = backMale[backRand][0];

            name = front.charAt(0).toUpperCase() + front.slice(1) + back;
            meaning = frontMale[frontRand][1] + " " + backMale[backRand][1];
            runic = frontMale[frontRand][2] + backMale[backRand][2];
        }
        else {

            gender = "<i class='fa fa-venus'></i>";

            frontRand = Math.floor(Math.random() * frontFemale.length);
            backRand = Math.floor(Math.random() * backFemale.length);

            while (frontFemale[frontRand][0] === backFemale[backRand][0])
                backRand = Math.floor(Math.random() * backFemale.length);

            if (prefix.value !== "random") frontRand = prefix.value;
            if (suffix.value !== "random") backRand = suffix.value;

            front = frontFemale[frontRand][0];
            back = backFemale[backRand][0];

            name = front.charAt(0).toUpperCase() + front.slice(1) + back;
            meaning = frontFemale[frontRand][1] + " " + backFemale[backRand][1];
            runic = frontFemale[frontRand][2] + backFemale[backRand][2];
        }

        starter.innerHTML = "";
        list.innerHTML = "<div id='entry'>"
                                + "<div id='name-text'>" + name + "</div>" + "<br>"
                                + gender + " " + meaning + "<br>"
                                + "Runic form: " + runic
                                + modernForm(name) + "</div>"
                                + list.innerHTML;
    }

    function modernForm(name) {

        if (name === "Hroðbehrt") return "<br>Modern: \"Robert\"";
        else if (name === "Eadweard") return "<br>Modern: \"Edward\"";
        else if (name === "Eadmund") return "<br>Modern: \"Edmund\"";
        else if (name === "Ælfræd") return "<br>Modern: \"Alfred\"";
        else if (name === "Eadgyð") return "<br>Modern: \"Edith\"";
        else if (name === "Æðelbehrt") return "<br>Modern: \"Albert\"";
        else if (name === "Ósweald") return "<br>Modern: \"Oswald\"";
        else if (name === "Ósmund") return "<br>Modern: \"Osmond\"";
        else if (name === "Eadwine") return "<br>Modern: \"Edwin\"";
        else if (name === "Eadgár") return "<br>Modern: \"Edgar\"";
        else if (name === "Eadwine") return "<br>Modern: \"Edwin\"";
        else if (name === "Hereweald") return "<br>Modern: \"Harold\"";
        else if (name === "Æðelþrýð") return "<br>Modern: \"Audrey\"";
        else if (name === "Gárþrýð") return "<br>Modern: \"Gertrude\"";
        else if (name === "Wilfrið") return "<br>Modern: \"Wilfred\"";
        else if (name === "Guþhere") return "<br>Modern: \"Gunther\"";
        else if (name === "Mildræd") return "<br>Modern: \"Mildred\"";
        else if (name === "Ósgár") return "<br>Modern: \"Oscar\"";
        else if (name === "Wilhelm") return "<br>Modern: \"William\"";
        else if (name === "Hroðwulf") return "<br>Modern: \"Rudolf\"";
        else if (name === "Æðelwulf") return "<br>Modern: \"Adolf\"";
        else if (name === "Godgifu") return "<br>Modern: \"Godiva\"";
        else if (name === "Eoforheard") return "<br>Modern: \"Everett\"";
        else if (name === "Richeard") return "<br>Modern: \"Richard\"";
        else if (name === "Beornheard") return "<br>Modern: \"Bernard\"";
        else if (name === "Bealdwine") return "<br>Modern: \"Baldwin\"";
        else if (name === "Godwine") return "<br>Modern: \"Godwin\"";
        else if (name === "Deórwine") return "<br>Modern: \"Darwin\"";
        else if (name === "Herewine") return "<br>Modern: \"Erwin\"";
        else if (name === "Þeodbeald") return "<br>Modern: \"Theobald\"";
        else if (name === "Áric") return "<br>Modern: \"Eric\"";
        else if (name === "Áláf") return "<br>Modern: \"Olaf\"";
        else if (name === "Friðric") return "<br>Modern: \"Fredrick\"";
        else if (name === "Hroðgár") return "<br>Modern: \"Roger\"";
        else if (name === "Friðnoð") return "<br>Modern: \"Ferdinand\"";
        else if (name === "Þeodric") return "<br>Modern: \"Dereck\"";
        else if (name === "Eorcanbeald") return "<br>Modern: \"Archibald\"";
        else if (name === "Winestán") return "<br>Modern: \"Winston\"";
        else return "";
    }
}
