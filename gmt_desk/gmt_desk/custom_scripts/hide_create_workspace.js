frappe.ui.form.on('Desk Page', {
    refresh: function(frm) {
        // Hide the "Create Workspace" option
        frm.page.hide_menu_item(__("Create Workspace"));
    }
});