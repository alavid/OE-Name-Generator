window.onload = function() {

    let generate = document.getElementById("generate-button");
    let nameField = document.getElementById("name");

    let frontMale = {
        names: [    "ælf", "æðel", "beorht", "beorn", "brun","cén", "ceol", "cuþ", "cyne", "deór", "dun", "ead", "eald", "ecg",
                    "eofor", "glæd", "god", "grim", "guþ", "here", "hild", "hroð", "léof", "ós", "sæ", "sige", "stíþ", "sunu", "swiþ",
                    "þúr", "þeod", "wað", "weald", "wig", "wil", "wine", "wulf", "wynn"],
        meanings: [ "Elven", "Noble", "Bright", "Warrior", "Brown", "Bold", "Ship", "Renowned", "Brave", "Dear", "Dark", "Rich",
                    "Old", "Blade", "Boar", "Gleaming", "Good", "Fierce", "Combat", "Army", "Battle", "Famous", "Beloved", "Divine",
                    "Sea", "Victorious", "Hard", "Son's", "Strong", "Thor", "People's", "Hunt", "Powerful", "Warlike", "Wiley",
                    "Friendly", "Wolf", "Joyous"]
    }
    let frontFemale = {
        names: [    "ælf", "æðel", "beorht", "brun","cén", "ceol", "cuþ", "cwen", "cyne", "deór", "dun", "ead", "eald", "ecg",
                    "eofor", "glæd", "god", "grim", "har", "hild", "hroð", "léof", "mild", "ós", "sæ", "sige", "stíþ", "swiþ",
                    "þúr", "þeod", "wað", "weald", "wig", "wil", "wine", "wulf", "wynn"],
        meanings: [ "Elven", "Noble", "Bright", "Brown", "Bold", "Ship", "Renowned", "Queen's", "Brave", "Dear", "Dark", "Rich",
                    "Old", "Blade", "Boar", "Gleaming", "Good", "Fierce", "Army", "Battle", "Famous", "Beloved", "Gentle", "Divine",
                    "Sea", "Victorious", "Hard", "Strong", "Thor", "People's", "Hunt", "Powerful", "War", "Wiley", "Friendly",
                    "Wolf", "Joyous"]
    }
    let backMale = {
        names: [    "beald", "behrt", "beorn", "dæg", "frið", "gár", "heah", "heard", "helm", "here", "hún", "mær", "mund", "noð",
                    "ræd", "ric", "sige", "stán", "þúr", "weald", "weard", "wig", "wine", "wulf"],
        meanings: [ "Bold", "Bright", "Warrior", "Day", "Peace", "Spear", "High", "Bravery", "Helmet", "Army", "Young Bear", "Fame",
                    "Protector", "Bold", "Counsel", "Power", "Victory", "Stone", "Thor", "Power", "Guardian", "War", "Friend", "Wolf"]
    }
    let backFemale = {
        names: [    "burg", "flæd", "gifu", "gyð", "hild", "swiþ", "þrýð", "wynn"],
        meanings: [ "City", "Beauty", "Gift", "Battle", "Battle", "Strength", "Might", "Joy"]
    }

    generate.onclick = function() {

        var frontRand;
        var front;
        var backRand;
        var back;
        var name;
        var meaning;
        var gender;

        var mf = Math.floor(Math.random() * 2);

        if (mf) {

            gender = "(m)";

            frontRand = Math.floor(Math.random() * frontMale.names.length);
            backRand = Math.floor(Math.random() * backMale.names.length);

            while (frontMale.names[frontRand] === backMale.names[backRand])
                backRand = Math.floor(Math.random() * backMale.names.length);

            front = frontMale.names[frontRand];
            back = backMale.names[backRand];

            name = front.charAt(0).toUpperCase() + front.slice(1) + back;
            meaning = frontMale.meanings[frontRand] + " " + backMale.meanings[backRand];
        }
        else {

            gender = "(f)";

            frontRand = Math.floor(Math.random() * frontFemale.names.length);
            backRand = Math.floor(Math.random() * backFemale.names.length);

            while (frontFemale.names[frontRand] === backFemale.names[backRand])
                backRand = Math.floor(Math.random() * backFemale.names.length);

            front = frontFemale.names[frontRand];
            back = backFemale.names[backRand];

            name = front.charAt(0).toUpperCase() + front.slice(1) + back;
            meaning = frontFemale.meanings[frontRand] + " " + backFemale.meanings[backRand];
        }

        nameField.innerHTML = name + " (" + meaning + ") " + gender + modernForm(name) + "<br>" + nameField.innerHTML;
    }

    function modernForm(name) {

        if (name === "Hroðbehrt") return " Modern form: \"Robert\"";
        else if (name === "Eadweard") return " Modern form: \"Edward\"";
        else if (name === "Eadmund") return " Modern form: \"Edmund\"";
        else if (name === "Ælfræd") return " Modern form: \"Alfred\"";
        else if (name === "Eadgyð") return " Modern form: \"Edith\"";
        else if (name === "Ælfbehrt") return " Modern form: \"Albert\"";
        else if (name === "Ósweald") return " Modern form: \"Oswald\"";
        else if (name === "Ósmund") return " Modern form: \"Osmond\"";
        else if (name === "Eadwine") return " Modern form: \"Edwin\"";
        else if (name === "Eadgár") return " Modern form: \"Edgar\"";
        else if (name === "Hereweald") return " Modern form: \"Harold\"";
        else if (name === "Æðelþrýð") return " Modern form: \"Audrey\"";
        else if (name === "Wilfrið") return " Modern form: \"Wilfred\"";
        else if (name === "Guþhere") return " Modern form: \"Gunther\"";
        else if (name === "Mildræd") return " Modern form: \"Mildred\"";
        else if (name === "Ósgár") return " Modern form: \"Oscar\"";
        else if (name === "Wilhelm") return " Modern form: \"William\"";
        else if (name === "Hroðwulf") return " Modern form: \"Rudolf\"";
        else if (name === "Æðelwulf") return " Modern form: \"Adolf\"";
        else if (name === "Godgifu") return " Modern form: \"Godiva\"";
        else if (name === "Eoforheard") return " Modern form: \"Everard\"";
        else return "";
    }
}
