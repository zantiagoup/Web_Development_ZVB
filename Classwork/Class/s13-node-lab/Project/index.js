// index.js - Student Starter Skeleton
// TODO 1: Import built-in Node modules (os, fs/promises, path)
import os from 'os';

//import File Sys so we can create files in OS
import fs from 'fs-extra';

// TODO 2: Import third-party NPM packages (chalk)
import chalk from 'chalk';

async function generateTelemetryReport() {
    console.log("Initializing Node.js Telemetry Engine...");

    try {
        // ==========================================
        // 1. HARVEST SYSTEM TELEMETRY (Built-in 'os' module)
        // ==========================================
        // TODO: Get CPU architecture, platform, free memory (in MB), and system uptime (in hours)
        const platform = os.platform();
        const freeMemMB = ((os.freemem() / (1024 * 1024)).toFixed(0));
        const uptimeHours = ((os.uptime() / 3600).toFixed(0));

        //TOTAL MEMORY, used memory, cpu model, (EXTRA ACTIVTY)
        const totalMemory = ((os.totalmem() / (1024 * 1024)).toFixed(0));
        const usedMemory = ((totalMemory - freeMemMB).toFixed(0));
        const cpuModel = os.cpus()[0].model;

        // ==========================================
        // 2. RENDER FORMATTED TERMINAL LOGS (Third-Party 'chalk')
        // ==========================================
        // TODO: Print a colorful status report to the terminal using chalk colors
        console.log("==========================================");
        console.log("         SYSTEM & ENV TELEMETRY           ");
        console.log("==========================================");

        // Print Platform, Free Memory, and Uptime with custom colors
        console.log(`${chalk.bold("OS Platform:")}      ${chalk.yellow(platform)}`);
        console.log(`${chalk.bold("Free memory (MB):")}      ${chalk.yellow(freeMemMB)}`);
        console.log(`${chalk.bold("Uptime (hrs):")}      ${chalk.yellow(uptimeHours)}`);

        // PRINT TOTAL MEMORY, used memory, cpu model, 
        console.log(`${chalk.bold("Total memory (MB):")}      ${chalk.blue(totalMemory)}`);
        console.log(`${chalk.bold("Used memory (MB):")}      ${chalk.blue(usedMemory)}`);
        console.log(`${chalk.bold("CPU Model:")}      ${chalk.blue(cpuModel)}`);


        // ==========================================
        // 3. WRITE PERMANENT LOG FILE (Built-in 'fs/promises')
        // ==========================================
        // TODO: Append logEntry to 'telemetry.log' using fs.appendFile()
        console.log("Writing log entry to disk...");

        // WRITING WITH fs-extra
        const logEntry = `[${new Date().toISOString()}] PLATFORM: ${platform} | FREEMEM: ${freeMemMB}MB | UPTIME: ${uptimeHours}hrs | TOTALMEM: ${totalMemory}MB | USED: ${usedMemory}MB | CPU: ${cpuModel}`;
        await fs.appendFile('telemetry.log', logEntry + '\n');

        console.log(chalk.bold.green("Telemetry audit completed successfully!"));

    } catch (error) {
        console.error("Telemetry report generation failed:", error.message);
    }
}

// Execute engine
generateTelemetryReport();