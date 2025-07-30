import { NextResponse } from "next/server"

// Mock database for demonstration
let requests = [
  {
    id: "HIM-2024-001",
    name: "Ahmad Ali",
    type: "rozgar",
    program: "IT Support Technician",
    status: "pending",
    date: "2024-01-15",
    phone: "+92 300 1234567",
    city: "Lahore",
    priority: "high",
    donor: "Muhammad Khan",
    amount: "50000",
  },
  {
    id: "HIM-2024-002",
    name: "Fatima Khan",
    type: "training",
    program: "Stitching & Embroidery",
    status: "approved",
    date: "2024-01-14",
    phone: "+92 321 9876543",
    city: "Karachi",
    priority: "medium",
    donor: "Ali Ahmad",
    amount: "25000",
  },
]

let donors = [
  {
    id: "DON-001",
    name: "Muhammad Khan",
    email: "muhammad.khan@email.com",
    phone: "+92 300 1111111",
    totalDonated: "500000",
    lastDonation: "2024-01-15",
    status: "active",
    type: "individual",
    city: "Lahore",
  },
  {
    id: "DON-002",
    name: "Ali Ahmad",
    email: "ali.ahmad@email.com",
    phone: "+92 321 2222222",
    totalDonated: "300000",
    lastDonation: "2024-01-14",
    status: "active",
    type: "individual",
    city: "Karachi",
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") // "requests" or "donors"
    const role = searchParams.get("role") // "admin" or "super_admin"

    if (type === "requests") {
      return NextResponse.json({ requests })
    } else if (type === "donors") {
      return NextResponse.json({ donors })
    } else {
      return NextResponse.json({ error: "Invalid type parameter" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { action, role, ...payload } = data

    // Role-based access control
    if (role === "admin" && action === "reject") {
      return NextResponse.json(
        { error: "Admins cannot reject requests" },
        { status: 403 }
      )
    }

    if (action === "approve") {
      const requestIndex = requests.findIndex(req => req.id === payload.requestId)
      if (requestIndex !== -1) {
        requests[requestIndex].status = "approved"
        return NextResponse.json({ message: "Request approved successfully" })
      }
    } else if (action === "reject" && role === "super_admin") {
      const requestIndex = requests.findIndex(req => req.id === payload.requestId)
      if (requestIndex !== -1) {
        requests[requestIndex].status = "rejected"
        return NextResponse.json({ message: "Request rejected successfully" })
      }
    } else if (action === "add_donor" && role === "super_admin") {
      const newDonor = {
        id: `DON-${Date.now()}`,
        ...payload,
        status: "active",
        totalDonated: "0",
        lastDonation: new Date().toISOString().split("T")[0],
      }
      donors.push(newDonor)
      return NextResponse.json({ message: "Donor added successfully", donor: newDonor })
    } else if (action === "update_donor" && role === "super_admin") {
      const donorIndex = donors.findIndex(donor => donor.id === payload.id)
      if (donorIndex !== -1) {
        donors[donorIndex] = { ...donors[donorIndex], ...payload }
        return NextResponse.json({ message: "Donor updated successfully" })
      }
    } else if (action === "delete_donor" && role === "super_admin") {
      const donorIndex = donors.findIndex(donor => donor.id === payload.id)
      if (donorIndex !== -1) {
        donors.splice(donorIndex, 1)
        return NextResponse.json({ message: "Donor deleted successfully" })
      }
    }

    return NextResponse.json({ error: "Invalid action or insufficient permissions" }, { status: 400 })
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
} 