import '../scss/app.scss';

import 'bootstrap';

import $ from 'jquery';

$(document).ready(function() {
    $(`[data-toggle="popover"]`).popover();
});

$(document).on(`click`, `[data-toggle="login-collapse"]`, function() {
    const div = $(this).parents(`.d-flex`).find(`.flex-fill`);

    $(`#` + $(this).attr(`data-show`)).collapse(`show`);
    $(`#` + $(this).attr(`data-hide`)).collapse(`hide`);

    if ($(this).parent().hasClass(`active`)) {
        return;
    }
    div.toggleClass(`active`);
});
