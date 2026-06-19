Bug #1 – Authentication Bypass

Title: User can login with missing credentials
Severity: Critical
Priority: High

Steps:
1. Navigate to login page
2. Enter any email
3. Leave password blank
4. Click Login

Expected:
User should see validation or invalid credentials message.

Actual:
User is successfully authenticated and redirected to inventory dashboard.

Additional Cases Observed:

a. Empty email + empty password
b. Empty email + random password

--------------------------------------------------------------------------------------------

Bug #2 – Product creation allows Invalid data

Title: System allows creation of product with mandatory fields left blank
Severity: High
Priority: High

Steps: 
1. Login
2. Click Add Product
3. Leave all fields empty
4. Click Save

Expected:
Validation messages should prevent save.

Actual:
Product is created with:

     Empty Name
     Price = $N/A
     Stock = N/A
     Category defaults to Electronics

---------------------------------------------------------------------------------------------

Bug #3 – Product edit does not persist changes

Title: Edited product information is not saved after update
Severity: High
Priority: Medium

Steps:
1. Login
2. Edit existing product
3. Modify name or other fields
4. Save

Expected:
Updated information should be displayed and persisted.

Actual:
Original values remain unchanged.
Re-opening edit dialog still shows original data.

---------------------------------------------------------------------------------------------

Bug 4 — Deleted product remains visible until page refresh

Title: Deleted Product remains visible in product list until page refresh
Severity: Medium
Priority: Medium

Steps:
1. Login
2. Delete existing product
3. Confirm deletion

Expected:
Product removed immediately from UI.

Actual:
Product remains visible until manual refresh.

Impact:
User receives misleading information and may believe deletion failed.

---------------------------------------------------------------------------------------------