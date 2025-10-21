"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Download, Database } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChartPro } from "../../mui-x/packages/x-charts-pro/src/index";

const salesData = [
  { month: "Jan", sales: 4000, revenue: 2400 },
  { month: "Feb", sales: 3000, revenue: 1398 },
  { month: "Mar", sales: 2000, revenue: 9800 },
  { month: "Apr", sales: 2780, revenue: 3908 },
  { month: "May", sales: 1890, revenue: 4800 },
  { month: "Jun", sales: 2390, revenue: 3800 },
];

const performanceData = [65, 59, 80, 81, 56, 55, 72];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "application",
    headerName: "Application",
    width: 150,
  },
  {
    field: "cspPolicy",
    headerName: "CSP Policy",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
  },
  {
    field: "violations",
    headerName: "Violations",
    type: "number",
    width: 110,
  },
  {
    field: "lastCheck",
    headerName: "Last Check",
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    application: "MUI Charts Demo",
    cspPolicy: "Strict",
    status: "Compliant",
    violations: 0,
    lastCheck: "2025-10-21 14:30",
  },
  {
    id: 2,
    application: "DataGrid Export",
    cspPolicy: "Moderate",
    status: "Warning",
    violations: 2,
    lastCheck: "2025-10-21 14:25",
  },
  {
    id: 3,
    application: "Legacy Dashboard",
    cspPolicy: "Strict",
    status: "Violation",
    violations: 15,
    lastCheck: "2025-10-21 14:20",
  },
  {
    id: 4,
    application: "Analytics Portal",
    cspPolicy: "Strict",
    status: "Compliant",
    violations: 0,
    lastCheck: "2025-10-21 14:15",
  },
  {
    id: 5,
    application: "Admin Panel",
    cspPolicy: "Moderate",
    status: "Warning",
    violations: 3,
    lastCheck: "2025-10-21 14:10",
  },
  {
    id: 6,
    application: "User Reports",
    cspPolicy: "Strict",
    status: "Compliant",
    violations: 0,
    lastCheck: "2025-10-21 14:05",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto py-8 px-4 max-w-7xl">
        <Tabs defaultValue="bar" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 max-w-lg">
            <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            <TabsTrigger value="line">Line Chart</TabsTrigger>
            <TabsTrigger value="datagrid">Data Grid</TabsTrigger>
          </TabsList>

          <TabsContent value="bar" className="space-y-4">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
                <CardTitle className="flex items-center justify-between">
                  <span>Sales Performance</span>
                  <Download className="h-5 w-5 text-slate-600" />
                </CardTitle>
                <CardDescription>
                  Monthly sales and revenue data with export toolbar
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="w-full h-[400px] flex items-center justify-center bg-white rounded-lg border border-slate-200">
                  <BarChartPro
                    xAxis={[
                      {
                        scaleType: "band",
                        data: salesData.map((d) => d.month),
                      },
                    ]}
                    series={[
                      {
                        data: salesData.map((d) => d.sales),
                        label: "Sales",
                        color: "#3b82f6",
                      },
                      {
                        data: salesData.map((d) => d.revenue),
                        label: "Revenue",
                        color: "#10b981",
                      },
                    ]}
                    width={700}
                    height={350}
                    showToolbar
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="line" className="space-y-4">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
                <CardTitle className="flex items-center justify-between">
                  <span>Weekly Performance Trend</span>
                  <Download className="h-5 w-5 text-slate-600" />
                </CardTitle>
                <CardDescription>
                  Week-over-week performance metrics with export toolbar
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="w-full h-[400px] flex items-center justify-center bg-white rounded-lg border border-slate-200">
                  <LineChart
                    xAxis={[{ scaleType: "point", data: xLabels }]}
                    series={[
                      {
                        data: performanceData,
                        label: "Performance Score",
                        color: "#8b5cf6",
                        curve: "catmullRom",
                      },
                    ]}
                    width={700}
                    height={350}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="datagrid" className="space-y-4">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    CSP Compliance Monitoring
                  </span>
                  <Download className="h-5 w-5 text-slate-600" />
                </CardTitle>
                <CardDescription>
                  Application security status with export functionality
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="w-full h-[400px] bg-white rounded-lg border border-slate-200">
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 5,
                        },
                      },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    sx={{
                      border: 0,
                      "& .MuiDataGrid-cell": {
                        borderColor: "#e2e8f0",
                      },
                      "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "#f8fafc",
                        borderColor: "#e2e8f0",
                      },
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
