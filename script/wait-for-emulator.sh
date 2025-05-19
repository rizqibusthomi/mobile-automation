#!/bin/bash
set +e

echo "⏳ Waiting for emulator to boot..."

adb wait-for-device

BOOT_COMPLETED=""
while [[ "$BOOT_COMPLETED" != "1" ]]; do
  BOOT_COMPLETED=$(adb shell getprop sys.boot_completed 2>/dev/null | tr -d '\r')
  sleep 2
done

echo "✅ Emulator boot completed!"
