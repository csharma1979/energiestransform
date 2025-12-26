# Port Change Task - 30007 to 30002

## Files to be Modified:
1. **package.json** - Update PORT configuration in dev and start scripts
2. **README.md** - Update any development instructions or port references

## Current Port Configuration:
- Development server: PORT=30002
- Start script: PORT=30002

## Changes Required:
✅ Update "dev" script: `cross-env PORT=30002 next dev`
✅ Update "start" script: `cross-env PORT=30002 next dev`

## Steps:
- [x] Read current package.json to confirm current settings
- [x] Update package.json with new port 30002
- [x] Update README.md with new port configuration
- [x] Verify changes are applied correctly

## Changes Completed:
✅ package.json - Updated dev and start scripts to use PORT=30002
✅ README.md - Updated with new port 30002 and development instructions

## Expected Result:
✅ COMPLETED - The Next.js development server will start on port 30002 instead of 30007.

## Final Verification:
✅ All files have been successfully updated to use port 30002
✅ No remaining references to port 30007 in project files (node_modules excluded)
